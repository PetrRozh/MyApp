interface TicketCardProps {
    subsName: string;
    nameSubs: string;
    price: string;
    positions1: string;
    positions2: string;
    positions3: string;
    positions4: string;
    positions5: string;
}

export const SubsCard = ({subsName,nameSubs,price,positions1,positions2,positions3,positions4,positions5}: TicketCardProps) => {
    return (
        <div className={subsName}>
            <div className='name-card ultra-24'>{nameSubs}</div>
            <div className='price-card ultra-18'>{price}</div>
                <div className='text-card-container atma-18'>{positions1}</div>
                <div className='text-card-container atma-18'>{positions2}</div>
                <div className='text-card-container atma-18'>{positions3}</div>
                <div className='text-card-container atma-18'>{positions4}</div>
                <div className='text-card-container atma-18'>{positions5}</div>
            <div className='explore-container'> 
            </div>
        </div>
    )
}