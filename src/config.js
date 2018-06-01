let config = {
	apiBaseUrl: 'http://192.168.99.100:8080'
}

switch (global.NODE_ENV) {
	case 'production': {
		const {protocol, hostname, port} = window.location;
		config.apiBaseUrl = `${protocol}//${hostname}${port ? `:${port}` : ''}`
		break;
	}
	case 'staging': {

		break;
	}
	case 'testing':
		break;
	default: {
		// development
		break;
	}
}

export default config
