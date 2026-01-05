import app from './app/app.js';

import { PORT } from './app/config/env.config.js';

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
