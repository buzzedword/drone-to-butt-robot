walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bDrone\b/g, "Butt Robot");
	v = v.replace(/\bDrones\b/g, "Butt Robots");
	v = v.replace(/\bdrone\b/g, "butt robot");
	v = v.replace(/\bdrones\b/g, "butt robots");

	textNode.nodeValue = v;
}


