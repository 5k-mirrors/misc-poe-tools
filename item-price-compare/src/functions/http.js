export const fetchJSON = url => {
  return fetch(url).then(response => {
    return response.text().then(textResponse => {
      if (response.ok) {
        try {
          return JSON.parse(textResponse);
        } catch (error) {
          throw new Error(
            `Could not JSON parse reponse: ${textResponse}. Error: ${error}`
          );
        }
      } else {
        throw new Error(`HTTP error: ${response.status} - ${textResponse}`);
      }
    });
  });
};
