import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer QA57Wcivs8TGyetnysslrCOcDzs9pWRCI5OWQBzanbi8ZTxlCEiPiQfPs_cq6F9NwXtDa0Vc3RplDVcV0aQNL3UMKvs_wJU_Fm7PsZ0Fthz9GzRcu5NcqMrDW6teY3Yx',
  },
});
