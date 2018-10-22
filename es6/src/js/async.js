async function f() {
	await new Promise(function(resolve,reject){
		throw new Error("出错了")
	})
}
f()
	.then(v => console.log(v))
	.catch(err => console.log(err))



function chainAnimationsPromise(ele,animations) {
	let ret = null;
	let p = Promise.resolve();
	console.log(p)

	for (let anim of animations) {
		p = p.then(function(val) {
			ret = val;
			return anim(ele)
		})
	}

	return p.catch(function(e) {

	}).then(function() {
		return ret
	})
}

function loginOrder(urls) {
	const textPromises = urls.map(url => {
		return fetch(url).then(res => res.text())
	})

	textPromises.reduce((chain,textPromise) => {
		return chain.then(() => textPromise)
			.then(text => console.log(text))
	},Promise.resolve())
}




/*
* 1、通知上面的搜索关键字不对
* 2、账号管理列表出错
*/




