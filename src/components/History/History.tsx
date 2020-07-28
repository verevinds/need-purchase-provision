import * as React from 'react';
import './History.scss';

const History: React.FC = () => {
  return (
    <div className='history'>
      <h5>История изменений</h5>
      <div className='history__block'>
        <div className='history__block__date'>июль 2018</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>введение нового договора ГПЗ 2019</span>
            </li>
            <li>
              <span>изменение фильтра в потребностях с возможностью скрытия</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>июнь 2018</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>добавление в заявку номера протокола и дату его публикации</span>
            </li>
            <li>
              <span>оповещение ответственных при истечении отведенного срока</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>декабрь 2017</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>изменение окна с историей позиции</span>
            </li>
            <li>
              <span>добавление комментариев к потребности в позиции, СУП 502</span>
            </li>
            <li>
              <span>добавление номера счета и договора в отчет</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>июль 2017</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>введение нового договора ГПЗ 2018 Основная</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>апрель 2017</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>добавление руководства оператора и алгоритма работы ПЗО</span>
            </li>
            <li>
              <span>уведомления на почту согласующим и утверждающим</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>март 2017</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>добавление даты применения в списке заявок</span>
            </li>
            <li>
              <span>создание шаблона ТКП</span>
            </li>
            <li>
              <span>изменение excel отчета по заявкам</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>февраль 2017</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>изменение excel отчета в потребностях</span>
            </li>
            <li>
              <span>возможность снятия позиции с резерва</span>
            </li>
            <li>
              <span>добавление номера договора на оплату в заявку</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>январь 2017</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>отчет по заявкам</span>
            </li>
            <li>
              <span>изменение группировки нераспределенных позиций</span>
            </li>
            <li>
              <span>добавление порядковых номеров в заявку</span>
            </li>
            <li>
              <span>возможность изменения количества у позиции в любое время</span>
            </li>
            <li>
              <span>возможность перезаписать номера при групповом приходовании</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>декабрь 2016</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>фильтр по номеру позиции заказа для кладовщиков</span>
            </li>
            <li>
              <span>возможность резервировать неполное количество</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>ноябрь 2016</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>изменение внешнего вида потребности</span>
            </li>
            <li>
              <span>возможность комментировать потребность любому пользователю</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>октябрь 2016</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>введение роли экономиста, возможность проставления приходников</span>
            </li>
            <li>
              <span>выбор кладовщиков при создании потребности</span>
            </li>
            <li>
              <span>параллельная работа нескольких кладовщиков</span>
            </li>
            <li>
              <span>возможность добавления документов в потребность после согласования</span>
            </li>
            <li>
              <span>изменение справочного раздела</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>сентябрь 2016</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>расширенная статистика работы КО, возмодность выбора периода</span>
            </li>
            <li>
              <span>массовый вывод выбранных потребностей в excel</span>
            </li>
            <li>
              <span>возможность загрузки ведомостей из ПК Производство</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>август 2016</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>возможность поиска наименований в БД СУОД</span>
            </li>
            <li>
              <span>улучшение алгоритма поиска дублей в наименованиях</span>
            </li>
            <li>
              <span>оптимизация загрузки и авторизации пользователя</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>июль 2016</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>общая дата ожидаемой поставки для всех позиций заявки</span>
            </li>
            <li>
              <span>общая дата применения для всех позиций потребности</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>май 2016</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>возможность подписки на уведомления по договору и заказу</span>
            </li>
            <li>
              <span>группировка позиций по договорам в заявках</span>
            </li>
            <li>
              <span>фильтрация статистики по договору и заказу</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>апрель 2016</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>возможность замены отклоненных позиций</span>
            </li>
            <li>
              <span>отчет по потребностям с суммированными позициями</span>
            </li>
            <li>
              <span>общий номер чертежа для всех позиций потребности, СУП 376</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>март 2016</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>прикрепление файлов к позициям, СУП 368</span>
            </li>
            <li>
              <span>вывод комментариев в списке потребностей</span>
            </li>
            <li>
              <span>передача заявки другому сотруднику КО</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>февраль 2016</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>суммирование позиций, СУП 365</span>
            </li>
            <li>
              <span>сортировка заявок, СУП 353</span>
            </li>
            <li>
              <span>сигнализация о требуемых действиях, СУП 345</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>декабрь 2015</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>улучшение поиска по потребностям</span>
            </li>
            <li>
              <span>группировка распределенных позиций по ответственному</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>ноябрь 2015</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>возможность вывода потребности в Excel</span>
            </li>
            <li>
              <span>справочник для номеров договоров и заказов</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>октябрь 2015</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>возможность отмены закупа позиции</span>
            </li>
            <li>
              <span>прикрепление поясняющих документов к потребности</span>
            </li>
            <li>
              <span>разовая отправка уведомлений на почту за последние 15 минут</span>
            </li>
            <li>
              <span>согласование и утверждение потребности внутри системы</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>сентябрь 2015</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>глобальное изменение интерфейса</span>
            </li>
            <li>
              <span>упрощение создания внутренних потребностей</span>
            </li>
            <li>
              <span>улучшение статистики и создание справки</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>июль 2015</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>отладка работы в части создания заявок</span>
            </li>
            <li>
              <span>добавление к заявкам номера счета и связанных с ним дат</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>июнь 2015</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>добавление уточнений к потребности</span>
            </li>
            <li>
              <span>добавление комментариев к позициям</span>
            </li>
            <li>
              <span>оповещение на email при изменениях потребности</span>
            </li>
            <li>
              <span>сводный отчет по всем позициям</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>апрель 2015</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>справка по статистике работы с ПЗО</span>
            </li>
            <li>
              <span>запрет работы с позицией без отметки начальника КО</span>
            </li>
            <li>
              <span>статус "потребность выполнена"</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block'>
        <div className='history__block__date'>март 2015</div>
        <div className='history__block__content'>
          <ul>
            <li>
              <span>добавление количества дней в закупе</span>
            </li>
            <li>
              <span>введение ролей и прав доступа</span>
            </li>
            <li>
              <span>запуск системы</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='history__block__button'>показать все</div>
    </div>
  );
};

export default React.memo(History);
