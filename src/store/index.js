
import { createStore } from "vuex";
import { authentication } from './authentication.module';
import { users } from './users.module';
import { centers } from './centers.module';

const store = createStore({
  modules: {
    authentication,
    users,
    centers
  },
});

export default store;