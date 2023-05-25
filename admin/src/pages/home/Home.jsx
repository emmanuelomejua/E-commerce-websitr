import "./home.css";
import { userData } from "../../dummyData";
import { Topbar, WidgetLg, WidgetSm, FeaturedInfo, Chart, Sidebar } from "../../components";

export default function Home() {
  return (
    <main className="i">
      <Topbar/>
      <section className="container">
      <Sidebar/>
      <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
      </div>
      </section>
    </main>
  );
}
