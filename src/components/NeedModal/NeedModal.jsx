import React, { useState, useCallback, useMemo } from 'react';

import Modal from '../Modal/Modal.jsx';
import ModalHeader from '../ModalHeader/ModalHeader.jsx';
import ModalBody from '../ModalBody/ModalBody.jsx';
import ModalFooter from '../ModalFooter/ModalFooter.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import HistoryModal from '../HistoryModal/HistoryModal.jsx';
import Table from '../Table/Table.jsx';
import NeedInfo from '../NeedInfo/NeedInfo.jsx';

const NeedModal = ({ show, onClose, handleTabs, need, currentUser }) => {
  const [numberPage] = handleTabs;
  const [showComm, setShowComm] = useState(false);
  const [showPosition, setShowPosition] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const handleToggleComm = useCallback(() => {
    setShowComm(!showComm);
  }, [showComm]);

  const handleTogglePosition = useCallback(() => {
    setShowPosition(!showPosition);
  }, [showPosition]);

  const handleToggleProduct = useCallback(() => {
    setShowProduct(!showProduct);
  }, [showProduct]);

  const bodyContent = useMemo(() => {
    let jsx;

    switch (numberPage) {
      case 1:
        jsx = (
          <HistoryModal
            history={[
              { id: 1, time: '30.07.2020 13:11:50', text: 'Потребность создана' },
              { id: 2, time: '30.07.2020 13:11:50', text: 'Загружено 3 позиции' },
              { id: 3, time: '30.07.2020 13:11:50', text: 'Дата применения: 19.08.2020' },
              {
                id: 4,
                time: '30.07.2020 13:11:50',
                text:
                  ' Комментарий к потребности: Приобрести для поз. 20-1013207 индуктор Ю99.676.000.',
                comment: true,
              },
              { id: 5, time: '30.07.2020 13:11:50', text: 'Согласует ...' },
              { id: 6, time: '30.07.2020 13:11:50', text: 'Утверждает ...' },
              { id: 7, time: '30.07.2020 13:11:50', text: 'Отправлена на согласование' },
            ]}
          />
        );
        break;
      default:
        jsx = (
          <>
            <NeedInfo
              products={[
                {
                  id: 1,
                  name: 'Номер заказа:',
                  class: <>{need.orders.title}</>,
                  span: true,
                  number: <>{need.orders.name}</>,
                },
                { id: 2, name: 'Автор:', def: `${currentUser?.name1} ${currentUser?.name2.charAt(
                  0,
                )}. ${currentUser?.name3.charAt(0)}.`},
                { id: 3, name: 'Согласующий:', confirm: 'согласовано (03.08.2020)' },
                { id: 4, name: 'Утверждающий:', confirm: 'утверждено (03.08.2020)' },
                { id: 5, name: 'Дата применения:', className: '_grey-color' },
              ]}
            />
            <Table
              lines={[
                {
                  id: 1,
                  name: 'Роликовая линейная опора качения ЛОК-26Л',
                  num: '1',
                  count: '4 штуки',
                  price: '-',
                  wait: 'обработка',
                },
                {
                  id: 2,
                  name: 'Роликовая линейная опора качения ЛОК-26Л',
                  num: '2',
                  count: '4 штуки',
                  price: '-',
                  wait: 'обработка',
                },
              ]}
              onClickInfo={handleTogglePosition}
              onClickProduct={handleToggleProduct}
              // header={['', '', '']}
            />
          </>
        );
        break;
    }

    return jsx;
  }, [numberPage, handleTogglePosition, handleToggleProduct, currentUser]);

  return (
    <>
      <Modal show={show}>
        <ModalHeader onClose={onClose}>
          <Tabs
            handleTabs={handleTabs}
            tabs={[
              { id: 0, name: <>Потребность #{need.id}</> },
              { id: 1, name: 'История и комментарии', badge: '2' },
            ]}
          />
        </ModalHeader>

        <ModalBody>{bodyContent}</ModalBody>

        <ModalFooter>
          <button type='button'>Скопировать</button>
          <button type='button'>Вывод в excel</button>
          <button type='button' onClick={handleToggleComm}>
            Комментарий
          </button>
        </ModalFooter>
      </Modal>

      <Modal
        show={showComm}
        onSave={() => {}}
        onClose={handleToggleComm}
        title='Введите текст комментария'>
        <input className='comment__input' />
      </Modal>

      <Modal show={showPosition} onClose={handleTogglePosition} title='История позиции #4222'>
        <>
          <div className='_stance-body-width'>
            <div className='stance-name'>Подшипник 36207 ГОСТ 831-75</div>
            <HistoryModal
              history={[
                {
                  id: 1,
                  time: '30.07.2020 13:11:50',
                  text:
                    ' Комментарий к потребности: Приобрести для поз. 20-1013207 индуктор Ю99.676.000.',
                  comment: true,
                },
                { id: 2, time: '30.07.2020 13:11:50', text: 'Потребность создана' },
                { id: 3, time: '30.07.2020 13:11:50', text: 'Загружено 3 позиции' },
                { id: 4, time: '30.07.2020 13:11:50', text: 'Дата применения: 19.08.2020' },
              ]}
            />
          </div>
        </>
      </Modal>

      <Modal show={showProduct} onClose={handleToggleProduct} title='Информация о наименовании'>
        <>
          <div className='_stance-body-width'>
            <div className='hint'>
              Вы можете обновить информацию о наименовании <b>только в том случае</b>, если оно
              создано вами, используется только в одной вашей потребности на стадии создания. В
              противном случае, изменения невозможны.
            </div>

            <NeedInfo
              products={[
                { id: 1, name: 'Наименование:' },
                { id: 2, name: 'Производитель:' },
                { id: 3, name: 'Каталожный номер:' },
                { id: 4, name: 'ГОСТ / ТУ:' },
                { id: 5, name: 'Ед. измерения:' },
                { id: 6, name: 'Номер SUOD:' },
              ]}
            />
          </div>
        </>
      </Modal>
    </>
  );
};

export default NeedModal;
