import styled from 'styled-components';
import LineChart from './LineChart';
import { Tab, TabGroup, TabList, TabPanels, TabPanel, Switch } from '@headlessui/react';
import { useContext, useState, useEffect, useMemo } from 'react';
import config from '../config.json';
import { DataSelectionContext, MapViewContext, CurrentJSONContext, ChartDataContext } from '../contexts/AppContext';
import { VideoContext } from '../contexts/VideoContext';
import { BackwardIcon, PlayIcon, PauseIcon, ForwardIcon } from '@heroicons/react/24/outline';

const StyledTabList = styled(TabList)`
  @media (max-width: 768px) {
    overflow-y: visible;
    overflow-x: auto;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;

    -ms-overflow-style: none;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.5rem;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0.25rem;
  }
`;

export default function Panel() {
    const { isPlaying, playVideo, pauseVideo } = useContext(VideoContext);
    const { mapView } = useContext(MapViewContext);
    const { setDataSelection } = useContext(DataSelectionContext);
    const { setCurrentJSON } = useContext(CurrentJSONContext);
    const [isFahrenheit, setIsFahrenheit] = useState(true);
    const { chartData } = useContext(ChartDataContext);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
          pauseVideo();
        } else {
          playVideo();
        }
    };

    const changeLayer = (item, index) => {
        setDataSelection([false, 0]);

        mapView.map.layers.forEach(layer => {
            if (layer.title !== item.name && layer.title !== 'Geodesic-Buffer' && layer.title !== 'Geodesic-Point') {
                layer.visible = false;
            } else if (layer.title === item.name) {
                layer.visible = true;
            }
        });

        const layer = mapView.map.layers.find(layer => layer.title === item.name);

        if (layer) {
            layer.visible = true;

            const currentProduct = config.find(product => product.name === layer.title);
            setCurrentJSON(currentProduct);
        }

        setSelectedIndex(index);
    };

    useEffect(() => {
        // Add any necessary effect logic here
    }, []);

    return (
        <div>
            <ToggleButton onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? 'Expand' : 'Collapse'}
            </ToggleButton>
            {!isCollapsed && (
                <>
                    <StyledTabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </StyledTabList>
                    <TabPanels>
                        <TabPanel>
                            <LineChart data={chartData} />
                        </TabPanel>
                        <TabPanel>
                            <div>Content for Tab 2</div>
                        </TabPanel>
                        <TabPanel>
                            <div>Content for Tab 3</div>
                        </TabPanel>
                    </TabPanels>
                    <div>
                        <button onClick={handlePlayPause}>
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </button>
                        <button>
                            <BackwardIcon />
                        </button>
                        <button>
                            <ForwardIcon />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
