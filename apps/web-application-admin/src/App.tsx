import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ServiceList } from "./service/ServiceList";
import { ServiceCreate } from "./service/ServiceCreate";
import { ServiceEdit } from "./service/ServiceEdit";
import { ServiceShow } from "./service/ServiceShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { TrainingRegistrationList } from "./trainingRegistration/TrainingRegistrationList";
import { TrainingRegistrationCreate } from "./trainingRegistration/TrainingRegistrationCreate";
import { TrainingRegistrationEdit } from "./trainingRegistration/TrainingRegistrationEdit";
import { TrainingRegistrationShow } from "./trainingRegistration/TrainingRegistrationShow";
import { TrainingList } from "./training/TrainingList";
import { TrainingCreate } from "./training/TrainingCreate";
import { TrainingEdit } from "./training/TrainingEdit";
import { TrainingShow } from "./training/TrainingShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WebApplication"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Service"
          list={ServiceList}
          edit={ServiceEdit}
          create={ServiceCreate}
          show={ServiceShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="TrainingRegistration"
          list={TrainingRegistrationList}
          edit={TrainingRegistrationEdit}
          create={TrainingRegistrationCreate}
          show={TrainingRegistrationShow}
        />
        <Resource
          name="Training"
          list={TrainingList}
          edit={TrainingEdit}
          create={TrainingCreate}
          show={TrainingShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
