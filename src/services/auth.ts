interface Response {
    user: {
        name: string;
        email: string;
        token: string;
    }
}

export function signIn():Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: {
                    name: 'Naldo',
                    email: "redi.gomes@gmail.com",
                    token: 's9b0m656yuipyo9mb9r0ueatv6454gdrga4ergafdg16arh54456gfda465fg654',
                },
            });
        }, 500);
    });
}