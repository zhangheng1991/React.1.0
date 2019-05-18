import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();
// 2. Plugins
// app.use({});y

// 3. Model
 //app.model(require('./models/example'));
// 4. Router
app.router(require('./router'));
app.model(require('./models/example'));
app.model(require('./models/Form'));
// 5. Start
app.start('#root');
