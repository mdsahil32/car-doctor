import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="text-center">
            <h2 className="font-semibold text-4xl">Our Service Area</h2>
            <p>
                the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-24">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;