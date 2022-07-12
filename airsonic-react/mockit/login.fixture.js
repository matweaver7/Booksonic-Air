module.exports = {
    default: true,
    description: "Logs in a User.",
    method: 'POST',
    url: '/login',
    statusCode: 200,
    handler: (req, res) => {
      // Use handlers to do very fine grained responses
      const data = req.body;
      
      res.set({
        'Content-Type': 'text/plain',
        'Set-Cookie': 'JSESSIONID=1B1DE5919F0F084BDAEE9D85116A43BF; Path=/; HttpOnly',
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
        'Expires': '0',
        'X-Frame-Options': 'SAMEORIGIN',
      });
      res.redirect("http://10.0.0.61:4040/index");
    }
  };