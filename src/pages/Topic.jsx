import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Markdown from "markdown-to-jsx";

export const WikiTopic = () => {
  const { topicId } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const deleteTopic = async () => {
    if (clickCount === 0) {
      setClickCount(clickCount + 1);
    } else {
      const response = await fetch(`http://localhost:3000/posts/${topicId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
        const response = await fetch(`http://localhost:3000/posts/${topicId}`);
        const json = await response.json();
        setPost(json);
        document.title = `${json.title} | Wiki`;
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, [topicId]);

  if (error) {
    return (
      <div>
        <h3>Topic not found with id: {topicId}</h3>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <div>
        <Markdown options={{ disableParsingRawHTML: true }}>
          {post.content}
        </Markdown>
      </div>
      <Button onClick={deleteTopic} size="sm" variant="danger">
        {clickCount === 0 ? "Delete topic" : "Confirm"}
      </Button>
    </div>
  );
};
