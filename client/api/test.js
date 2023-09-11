export default async function handler(request, response) {
  console.log("request.method", request.method);

  return response.status(200).json({ status: "Hello from test" });
}
