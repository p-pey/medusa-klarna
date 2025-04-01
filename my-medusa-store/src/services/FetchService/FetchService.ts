

interface IFetchArgs<D extends RequestInit['body']> extends Omit<RequestInit, "body" | "method"> {
       url: string,
       body?: D,
       method: "GET" | "POST" | "PUT" | "DELETE"
};

type IResponse<R> = {
       status: number,
       data: R
}

export async function FetchService<D extends RequestInit['body'], R>(args: IFetchArgs<D>): Promise<IResponse<R>> {
       try {
              const { url, ...rest } = args
              const response = await fetch(args.url, rest);
              const data = response.json() as R;

              return Promise.resolve({
                     status: response.status,
                     data
              })
       } catch (e) {
              return Promise.reject(e);
       }
}