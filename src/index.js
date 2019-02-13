import phtml from 'phtml';

export default new phtml.Plugin('phtml-self-closing', opts => {
	const ignore = [].concat(Object(opts).ignore || []);

	return root => {
		root.walk(node => {
			const shouldUnclose = node.type === 'element' && node.isSelfClosing && !node.isVoid && !ignore.includes(node.name);

			if (shouldUnclose) {
				node.isSelfClosing = false;
			}
		});
	};
});
