export class Index {
    /**
     * handler
     */
    public async handler(event, context, callback) {
        console.log('About to call method');
        const str = await this.promiseMethod(callback);

        console.log(`Return from promises with ${str}`);

        return Promise.resolve(str);
    }

    private async promiseMethod(callback): Promise<string> {
        console.log(`Callback should respond at ${new Date()}`);
        callback(null, {
            body: `Callback responded at ${new Date()}`,
            statusCode: 200
        });
        console.log(`Slept at ${new Date()}`);
        await new Promise(resolve => setTimeout(resolve, 8 * 1000));
        console.log(`Woke up ${new Date()}`);
        return `Finished at ${new Date()}`;
    }
}

export const instance = new Index();
/* istanbul ignore next */
export const handler = (event, context, callback) => instance.handler(event, context, callback);
