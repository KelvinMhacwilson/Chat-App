function errorHandler(controller, res, error) {
  console.log(`Error in ${controller} controller: `, error.message);
  res.status(500).json({ error: "Internal Server Error" });
}

export default errorHandler;
