import { CircularProgress } from "@mui/material";

export const Loading = ({ show }) => {
    return show ? <CircularProgress /> : null
}