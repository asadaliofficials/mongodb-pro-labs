import app from './app/app.js';
import connectDB from './app/config/db.config.js';

import { PORT } from './app/config/env.config.js';

app.listen(PORT, () => {
  connectDB();
	console.log(`Server is listening on http://localhost:${PORT}`);
});
