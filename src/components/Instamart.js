import { useState } from "react";

const Section = ({
  title,
  description,
  id,
  currentId,
  setCurrentId,
  isVisible,
  setIsVisible,
}) => {
  //      console.log("1. isVisible of "+id+" is "+isVisible)
  //   console.log("2. CurrentId of "+id+" is "+currentId)
  return (
    <div className="border border-black m-2  p-2">
      <h1 className="font-bold">{title}</h1>
      {isVisible && currentId === id ? (
        <>
          <button
            className="underline text-xs"
            onClick={() => {
              setCurrentId(id);
              setIsVisible(false);
            }}
          >
            Hide
          </button>
          <h2>{description}</h2>
        </>
      ) : (
        <>
          <button
            className="underline text-xs"
            onClick={() => {
              setCurrentId(id);
              setIsVisible(true);
            }}
          >
            Show
          </button>
          <h2>{description}</h2>
        </>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  return (
    <>
      <h1 className="text-3xl m-2">Instamart</h1>
      <Section
        id="1"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        currentId={currentId}
        setCurrentId={setCurrentId}
        title={"About"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
      />
      <Section
        id="2"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        currentId={currentId}
        setCurrentId={setCurrentId}
        title={"Vision"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
      />
      <Section
        id="3"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        currentId={currentId}
        setCurrentId={setCurrentId}
        title={"Careers"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
      />
    </>
  );
};

export default Instamart;
