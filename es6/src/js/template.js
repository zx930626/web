var sender = `<script>alert(23);</script>`;
var message = saferHTML`<p>${sender} has send you a message.</p>`;

function saferHTML(temp) {
	var s = temp[0];
	for (let i = 0;i < arguments.length;i++) {
		let arg = String(arguments[i]);
		s += arg.replace(/&/g,'&amp;')
				.replace(/</g,'&lt;')
				.replace(/>/g,'&gt;')
		s += temp[i]
	}
	return s;
}
console.log(message)