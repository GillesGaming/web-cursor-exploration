function randomColor()
{
	let ret = `#`;
	for(let i = 0; i < 6; i++)
		ret += Math.floor(Math.random() * 16).toString(16);
	return ret;
}
