import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer l6ZzbU26y_Y2NfW_BkUL00XnUa0nSrX9lAAWO_DXXhKcG3Xj2t3EnM1nTY4tD_DsIIiSaLE-nVDCVGE8c7kGfLCJAdSVDE5WUCkN5SQpZzJk4QEssA4H52fnSCRXY3Yx',
  },
});
