import { useState, useEffect } from 'react';
import { getEvents, filterEventsByCategory, filterEventsBySubject, filterEventsByDate } from '../../utils/datatest';

import NavigationBar from '../../components/navigationbar';
import CustomCarousel from '../../components/carousel';
import EventCard from '../eventcard';
import ContentBox from '../ui/contentbox';
import EventDetailsDialogBox from '../ui/eventdialogbox';
import DateInput from '../ui/dateinput';
import SelectInput from '../ui/selectinput';
import Label from '../ui/label';

import {
    GridContentBox,
    CarouselContentBox,
    FilterArea,
    CardArea
} from './style';

export default function HomeDashboard() {
    const allEvents = getEvents();
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showDetailsDialog, setShowDetailsDialog] = useState(false);
    
    const [filterCategory, setFilterCategory] = useState('');
    const [filterSubject, setFilterSubject] = useState('');
    const [filterDate, setFilterDate] = useState('');
    
    const [displayedEvents, setDisplayedEvents] = useState(allEvents);

    useEffect(() => {
        let currentEvents = allEvents;

        if (filterCategory) {
            currentEvents = filterEventsByCategory(filterCategory);
        }
        if (filterSubject) {
            currentEvents = currentEvents.filter(event => event.subject === filterSubject);
        } 
        if (filterDate) {
            currentEvents = currentEvents.filter(event => event.date === filterDate);
        }

        setDisplayedEvents(currentEvents);
    }, [filterCategory, filterSubject, filterDate, allEvents]);

    const handleOpenDetails = (event) => {
        setSelectedEvent(event);
        setShowDetailsDialog(true);
    };

    const handleCloseDetails = () => {
        setShowDetailsDialog(false);
        setSelectedEvent(null);
    };

    return (
        <>
            <NavigationBar />

            <GridContentBox>
                <CarouselContentBox>
                    <CustomCarousel />
                </CarouselContentBox>

                <FilterArea>
                    <ContentBox> 
                        <Label>Filtrar por categoria</Label>
                        <SelectInput
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            options={[
                                { value: '', label: 'Todas as Categorias' },
                                { value: 'Festival', label: 'Festival' },
                                { value: 'Conferência', label: 'Conferência' },
                                { value: 'Exposição', label: 'Exposição' },
                                { value: 'Entretenimento', label: 'Entretenimento' },
                                { value: 'Beneficente', label: 'Beneficente' },
                                { value: 'Esporte', label: 'Esporte' },
                                { value: 'Educação', label: 'Educação' },
                                { value: 'Palestra', label: 'Palestra' },
                                { value: 'Workshop', label: 'Workshop' },
                                { value: 'Evento', label: 'Evento Geral' },
                            ]}
                            className="form-select"
                        />
                    </ContentBox>

                    <ContentBox> 
                        <Label>Filtrar por assunto</Label>
                        <SelectInput
                            value={filterSubject}
                            onChange={(e) => setFilterSubject(e.target.value)}
                            options={[
                                { value: '', label: 'Todos os Assuntos' },
                                { value: 'Música', label: 'Música' },
                                { value: 'Tecnologia', label: 'Tecnologia' },
                                { value: 'Comida', label: 'Comida' },
                                { value: 'Cinema', label: 'Cinema' },
                                { value: 'Arte', label: 'Arte' },
                                { value: 'Corrida', label: 'Corrida' },
                                { value: 'Palestra', label: 'Palestra' },
                                { value: 'Workshop', label: 'Workshop' },
                                { value: 'Evento', label: 'Evento Geral' },
                            ]}
                            className="form-select"
                        />
                    </ContentBox>

                    <ContentBox>
                        <Label>Filtrar por data</Label>
                        <DateInput
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                        />
                    </ContentBox>
                </FilterArea>

                <CardArea>
                    <ContentBox className="row justify-content-center"> 
                        {displayedEvents.length > 0 ? (
                            displayedEvents.map(event => (
                                <ContentBox 
                                    key={event.id} 
                                    className={
                                        displayedEvents.length === 1 
                                            ? "col-md-12 col-sm-12 mb-4 d-flex justify-content-center" 
                                            : "col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
                                    }
                                >
                                    <EventCard event={event} onDetailsClick={handleOpenDetails} />
                                </ContentBox>
                            ))
                        ) : (
                            <Label>Nenhum evento encontrado com os filtros selecionados.</Label>
                        )}
                    </ContentBox> 
                </CardArea>
            </GridContentBox>

            {showDetailsDialog && (
                <EventDetailsDialogBox
                    eventDetails={selectedEvent}
                    onClose={handleCloseDetails}
                />
            )}
        </>
    );
}