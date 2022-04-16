
import { createStore } from "vuex";
import { authentication } from './authentication.module';
import { users } from './users.module';
import { centers } from './centers.module';
import { services } from './service.module';

const store = createStore({
  modules: {
    authentication,
    users,
    centers,
    services
  },
});

export default store;