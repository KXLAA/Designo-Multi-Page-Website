import styled from "styled-components";

export const BgPattern = () => {
  const Pattern = styled.div`
    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    opacity: 0.31;
    width: 292px;
    height: 292px;
    position: absolute;
    right: 0px;
    bottom: 130px;
    border-radius: 100%;
  `;

  return (
    <>
      <Pattern style={{ bottom: "112px", transform: "rotate(-90deg)" }} />
      <Pattern style={{ bottom: "112px", right: "291px" }} />
      <Pattern
        style={{ bottom: "112px", right: "581px", transform: "rotate(-90deg)" }}
      />

      <Pattern style={{ top: "129px", transform: "rotate(-90deg)" }} />
      <Pattern style={{ top: "129px", right: "291px" }} />
      <Pattern
        style={{ top: "129px", right: "580px", transform: "rotate(90deg)" }}
      />
    </>
  );
};

export const BgPatternSmall = () => {
  const Pattern = styled.div`
    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    opacity: 0.31;
    width: 292px;
    height: 292px;
    position: absolute;
    right: 0px;
    bottom: 130px;
    border-radius: 100%;
  `;

  return (
    <>
      <Pattern style={{ transform: "rotate(-90deg)" }} />
      <Pattern style={{ right: "291px" }} />

      <Pattern style={{ top: "162px", transform: "rotate(-90deg)" }} />
      <Pattern style={{ top: "162px", right: "291px" }} />
      <Pattern
        style={{ top: "162px", right: "580px", transform: "rotate(90deg)" }}
      />
    </>
  );
};