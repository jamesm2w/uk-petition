class Request {

	constructor (method, uri, data = {}) {
		this.method = method;
		this.uri = uri;
		this.data = data;
	}

	static post (uri, data) {
		return new Request("POST", uri, data);
	}

	static get (uri) {
		return new Request("GET", uri);
	}

	execute () {
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();

			xhr.open(this.method, this.uri, true);

			xhr.onload = () => resolve(JSON.parse(xhr.responseText));

			xhr.onerror = () => reject(xhr.statusText);

			xhr.send(JSON.stringify(this.data));
		});
	}
}