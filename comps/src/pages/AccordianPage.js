import Accordian from "../components/Accordian";

function AccordianPage() {
  const items = [
    {
      id: "fdsasdf",
      label: "You can use React in a project.",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nobis, nihil provident aliquid ducimus asperiores animi maxime, est sit neque beatae recusandae blanditiis, error inventore odit voluptas nulla dicta magni.",
    },
    {
      id: "fdsasdf2",
      label: "You can use Javascript in a project.",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nobis, nihil provident aliquid ducimus asperiores animi maxime, est sit neque beatae recusandae blanditiis, error inventore odit voluptas nulla dicta magni.",
    },
    {
      id: "fdsasdf3",
      label: "You can use CSS in a project.",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nobis, nihil provident aliquid ducimus asperiores animi maxime, est sit neque beatae recusandae blanditiis, error inventore odit voluptas nulla dicta magni.",
    },
  ];

  return <Accordian items={items} />;
}

export default AccordianPage;
