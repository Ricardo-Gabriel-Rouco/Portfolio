import { Text, Button, Link } from "@chakra-ui/react";
import { useState } from "react";

const TruncatedText = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 136;

  const text =
    "I am an experienced web developer with a JavaScript background, specializing in creating innovative and user-friendly web applications. With a passion for learning and staying up to date with the latest industry trends. In addition to my technical expertise, I take pride in my strong work ethic, reliability, and ability to meet deadlines while maintaining the highest standards of quality. Outside of work, I enjoy exploring new technologies, staying connected with the tech community, and spending quality time with loved ones. I am actively seeking new opportunities to apply my skills and contribute to exciting projects. If you are interested in collaborating or would like to learn more about my work, please feel free to reach out. I am always open to connecting with professionals and exploring potential collaborations in the digital world.";

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = text.slice(0, maxLength);

  if (text.length <= maxLength || isExpanded) {
    return (
      <>
        <Text>{text}</Text>
        <Link onClick={() => toggleExpansion()}>show less...</Link>
      </>
    );
  }

  return (
    <>
      <Text>{truncatedText}</Text>
      <Link onClick={() => toggleExpansion()}>show more</Link>
    </>
  );
};

export default TruncatedText;
