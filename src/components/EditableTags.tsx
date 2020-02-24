import PropTypes from "prop-types";
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { colors, fontSizes } from "../theme";

interface Props {
  edit: boolean;
  tags: { color: string; value: string }[];
  setTags: (tags: { color: string; value: string }[]) => any;
}

const EditableTags: React.FunctionComponent<Props> = ({
  edit,
  tags,
  setTags
}) => {
  const [value, setValue] = useState("");

  const tagColors = [colors.green, colors.yellow, colors.blue, colors.red];

  return (
    <TagBar edit={edit}>
      {tags &&
        tags.map(t => (
          <Tag
            key={Math.random()}
            color={t.color}
            edit={edit}
            deleteTag={value => setTags(tags.filter(x => x.value != value))}
            value={t.value}
          />
        ))}
      {edit && (
        <StyledInput
          placeholder="Enter a tag name"
          value={value}
          onKeyPress={e => {
            if (e.key === " " || e.key === "Enter") {
              setValue("");
              value &&
                setTags([
                  ...tags,
                  {
                    value,
                    color:
                      tagColors[Math.floor(Math.random() * tagColors.length)]
                  }
                ]);
            }
          }}
          onChange={e => setValue(e.target.value)}
        />
      )}
      <Break />
    </TagBar>
  );
};

const TagBar = styled.div<{ edit: boolean }>`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-color: ${p => (p.edit ? colors.lightgray : "transparent")};
`;

const StyledInput = styled.input`
  border: 0px solid transparent;
  background-color: ${colors.lightgray};
  font-size: ${fontSizes.small};
`;

const Break = styled.div`
  float: none;
  clear: both;
`;

EditableTags.propTypes = {
  edit: PropTypes.any,
  setTags: PropTypes.any,
  tags: PropTypes.any
};

export default EditableTags;
