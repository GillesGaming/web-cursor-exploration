function randomColor()
{
	let ret = `#`;
	for(let i = 0; i < 6; i++)
		ret += Math.floor(Math.random() * 16).toString(16);
	return ret;
}

function randomColorMaterial()
{
	const rand01 = _ => Math.floor(Math.random() * 2);
	let ret = [];
	const diff = Math.floor(Math.random() * 4);
	let first = Math.floor(Math.random() * 256);
	let second = Math.round(first * diff / 10);
	let third = Math.max(0, diff - 1) * 127;

	second = rand01()
		? Math.min(255, first + second)
		: Math.max(  0, first - second);

	ret.push(second);
	rand01() ? ret.push(first) : ret.unshift(first);
	rand01() ? ret.push(third) : ret.unshift(third);

	return `#` + ret.map(
		c => `00${c.toString(16)}`.slice(-2)
	).join(``);
}
