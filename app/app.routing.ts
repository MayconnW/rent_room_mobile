import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { ListComponent as ListClientsComponent} from "./pages/client/list.component";
import { ListComponent as ListHotelsComponent} from "./pages/hotel/list.component";
import { ListComponent as ListApartmentComponent} from "./pages/apartment/list.component";
import { ListComponent as ListRoomComponent} from "./pages/room/list.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "clients", component: ListClientsComponent },
  { path: "hotels", component: ListHotelsComponent },
  { path: "apartments", component: ListApartmentComponent },
  { path: "rooms", component: ListRoomComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  ListClientsComponent,
  ListHotelsComponent,
  ListApartmentComponent,
  ListRoomComponent
];