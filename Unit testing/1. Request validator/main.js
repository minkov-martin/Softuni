function solve(input) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!validMethods.includes(input.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    let versionRegExp = /^([\d.\w]+)$|^[\*]$/;
    if (!versionRegExp.test(input.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (!validVersions.includes(input.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }

    let messageRegExp = /^[^<>\\&'"]*$/;
    if (!messageRegExp.test(input.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return input;
}

