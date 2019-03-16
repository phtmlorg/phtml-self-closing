import phtml from 'phtml';

export default new phtml.Plugin('phtml-self-closing', opts => {
	const ignore = [].concat(Object(opts).ignore || []);

	return {
		Element (node) {
			const shouldUnclose = node.isSelfClosing && !node.isVoid && !ignore.includes(node.name);

			if (shouldUnclose) {
				node.isSelfClosing = false;
				node.isWithoutEndTag = false;

				if (!node.isVoid) {
					node.source.before = node.source.before.replace(/\//g, '');
				}
			}
		}
	};
});
