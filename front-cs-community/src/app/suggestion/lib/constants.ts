export const ITEM_HEIGHT = 35;
export const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBOYW1lIjoiU3VnZ2VzdFN5c3RlbSIsImlhdCI6MTcwMzY5Njk0MSwiZXhwIjoxNzM1MjU0NTQxfQ.kJUA7QzYeUjdk0gskv1fJng4Ka9oF3uA1mBf2dhJ3cw";


export const apiUri = "http://localhost:9000/api/v1"