"use strict";

/**
 * Fetch data from server
 * @param {*} url  API Url [required]
 * @param {*} successCallback  success callback [required]
 * @param {*} errorCallback  error callback [optional]
 */

export async function fetchData(url, successCallback, errorCallback) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      successCallback(data);
    } else {
      const error = await response.json();
      errorCallback && errorCallback(error);
    }
  } catch (error) {
    console.log("");
  }
}
