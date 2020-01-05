function compute( a, b, c) {
	if( b == '+')
		return (a + c);
	else if( b == '-')
		return (a - c);
	else if( b == '*')
		return (a * c);
	else if( b == '/')
		return (a / c);
}

module.exports = { compute };