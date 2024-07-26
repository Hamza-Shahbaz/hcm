import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppState } from "../Store/Drawer/DrawerSlice";

const PageWrapper = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.state) {
      dispatch(setAppState(props.state));
    }
  }, [dispatch, props.state]);

  return (
    <>{props.children}</>
  );
};

export default PageWrapper;
