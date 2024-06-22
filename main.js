import { formActor } from "./src/scripts/formMachine";
import "./style.css";

formActor.subscribe((snapshot) => {
  console.log(snapshot);
});

formActor.start();
// formActor.send({
//   type: "info.submitted",
// });
// formActor.send({
//   type: "plan.submitted",
// });
