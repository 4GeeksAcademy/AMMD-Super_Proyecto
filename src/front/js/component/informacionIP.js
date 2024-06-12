import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const InformacionIp = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.obtenerID();
    }, []);

    // Obtener la información de la IP desde el store
    const { ipInfo } = store;

    if (!ipInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* <h1>IP Information for {ipInfo.ip}</h1> */}
            {/* <p>Type: {ipInfo.version}</p>
            <p>Continent: {ipInfo.continent_code}</p> */}
            <p>Country: {ipInfo.country_name} ({ipInfo.country_code})</p>
            {/* <p>Region: {ipInfo.region} ({ipInfo.region_code})</p> */}
            <p>City: {ipInfo.city}</p>
            {/* <p>Latitude: {ipInfo.latitude}</p>
            <p>Longitude: {ipInfo.longitude}</p> */}
            {/* <p>Postal Code: {ipInfo.postal}</p> */}
            {/* <p>Calling Code: {ipInfo.country_calling_code}</p> */}
            {/* <p>Capital: {ipInfo.country_capital}</p> */}
            {/* <p>EU Member: {ipInfo.in_eu ? "Yes" : "No"}</p> */}
            {/* <p>Time Zone: {ipInfo.timezone}, UTC Offset: {ipInfo.utc_offset}</p> */}
            {/* <p>ISP: {ipInfo.org}</p> */}
        </div>
    );
};

export default InformacionIp;
