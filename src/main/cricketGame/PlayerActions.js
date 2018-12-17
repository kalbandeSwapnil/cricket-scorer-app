
export const changeName = (dispatch) => {
    let lastName = "swapnil"
    dispatch({
      type: "UPDATE",
      lastName
    })
}