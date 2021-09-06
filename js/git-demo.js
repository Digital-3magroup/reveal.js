Reveal.initialize(
{ hash: true
, transition: 'fade'
, plugins:
	[ RevealMarkdown
	, RevealHighlight
	, RevealNotes
	]
}
);

window.addEventListener('load', () =>
	{
		const toc_node = document.querySelector('.toc > ol');
		document.querySelectorAll('section > h2').forEach(
			title_node =>
			{
				const li_node = document.createElement('li');
				const text_node = document.createTextNode(title_node.textContent);
				li_node.appendChild(text_node);
				toc_node.appendChild(li_node);
			}
		)
	}
);
