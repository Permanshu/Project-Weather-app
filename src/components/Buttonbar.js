import Button from 'react-bootstrap/Button';

function TagTypesExample() {
    return (
        <div className="city-button-container">
            <Button className="city-button" as="input" type="button" value="Delhi" />
            <Button className="city-button" as="input" type="button" value="Mumbai" />
            <Button className="city-button" as="input" type="button" value="Hyderabad" />
            <Button className="city-button" as="input" type="button" value="Bengaluru" />
            <Button className="city-button" as="input" type="button" value="Kolkata" />
        </div>

    );
}

export default TagTypesExample;
