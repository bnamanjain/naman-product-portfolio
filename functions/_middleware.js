const privateResumePath =
  "/downloads/Naman-Jain-Business-Program-Category-Resume.pdf";

export function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname === privateResumePath) {
    return Response.redirect(
      new URL(
        "/downloads/Naman-Jain-Product-Manager-Resume.pdf",
        url.origin,
      ),
      302,
    );
  }

  return context.next();
}
