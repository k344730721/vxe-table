export default {
  vxe: {
    base: {
      pleaseInput: 'Пожалуйста, введите',
      pleaseSelect: 'Пожалуйста, выберите',
      comma: '，',
      fullStop: '。'
    },
    loading: {
      text: 'загрузка...'
    },
    error: {
      downErr: 'Загрузка не удалась',
      groupFixed: 'При использовании заголовков групп замороженные столбцы должны быть установлены по группам.',
      groupMouseRange: 'Заголовок группы и "{0}" нельзя использовать одновременно, что может привести к ошибке.',
      groupTag: 'В заголовке столбца группировки следует использовать «{0}» вместо «{1}», что может привести к ошибкам.',
      scrollErrProp: 'Параметр "{0}" не поддерживается, если включена виртуальная прокрутка.',
      errConflicts: 'Параметры "{0}" конфликтуют с "{1}"',
      unableInsert: 'Невозможно вставить в указанную позицию, проверьте правильность параметров.',
      useErr: 'Произошла ошибка при установке модуля "{0}". Порядок может быть неверным. Зависимые модули необходимо установить перед Табл.',
      barUnableLink: 'Панель инструментов не может быть связана с таблицей',
      expandContent: 'Слот для расширения строки должен быть «Содержимым», проверьте правильность этого значения.',
      reqComp: 'Компонент "{0}" отсутствует, проверьте, правильно ли он установлен. https://vxeui.com/#/start/useGlobal',
      reqModule: 'Отсутствует модуль "{0}"',
      reqProp: 'Отсутствует обязательный параметр "{0}", что может привести к ошибке.',
      emptyProp: 'Параметр "{0}" не может быть пустым.',
      errProp: 'Неподдерживаемый параметр "{0}", возможен "{1}"',
      colRepet: 'columns.{0}="{1}" повторяется, что может привести к тому, что некоторые функции станут непригодными для использования.',
      notFunc: 'Метод "{0}" не существует.',
      errFunc: 'Параметр "{0}" не является методом.',
      notValidators: 'Глобальная проверка "{0}" не существует.',
      notFormats: 'Глобальный формат "{0}" не существует.',
      notCommands: 'Глобальная директива "{0}" не существует.',
      notSlot: 'Слот "{0}" не существует',
      noTree: 'Древовидная структура не поддерживает "{0}"',
      notProp: 'Неподдерживаемый параметр "{0}"',
      checkProp: 'Если объем данных слишком велик, это может привести к зависанию флажка. Рекомендуется установить параметр «{0}», чтобы улучшить скорость рендеринга.',
      coverProp: 'Параметр "{1}" из "{0}" определяется повторно, что может вызвать ошибку.',
      uniField: 'Имя поля "{0}" определяется повторно, что может вызвать ошибку.',
      delFunc: 'Метод "{0}" устарел, используйте "{1}"',
      delProp: 'Параметр "{0}" устарел, используйте "{1}"',
      delEvent: 'Событие "{0}" устарело, используйте "{1}"',
      removeProp: 'Параметр "{0}" устарел, не рекомендуется и может привести к ошибкам.',
      errFormat: 'Глобальное содержимое форматирования должно определяться с помощью «VXETable.formats». Метод монтирования «formatter={0}» больше не рекомендуется.',
      notType: 'Неподдерживаемый тип файла "{0}"',
      notExp: 'Этот браузер не поддерживает функцию импорта/экспорта.',
      impFields: 'Не удалось выполнить импорт. Проверьте правильность имени поля и формата данных.',
      treeNotImp: 'Древовидные таблицы не поддерживают импорт.'
    },
    table: {
      emptyText: 'Данных пока нет',
      allTitle: 'Выбрать все/Отменить',
      seqTitle: 'серийный номер',
      actionTitle: 'действовать',
      confirmFilter: 'фильтр',
      resetFilter: 'перезагрузить',
      allFilter: 'все',
      sortAsc: 'В порядке возрастания: от низшего к высшему',
      sortDesc: 'В порядке убывания: от самого высокого к самому низкому.',
      filter: 'Включить фильтрацию по выбранным столбцам',
      impSuccess: 'Успешно импортировано {0} записей.',
      expLoading: 'Экспорт',
      expSuccess: 'Экспорт выполнен успешно',
      expFilename: 'Экспорт_{0}',
      expOriginFilename: 'экспорт_источник_{0}',
      customTitle: 'Настройки столбца',
      customAll: 'все',
      customConfirm: 'подтверждать',
      customClose: 'закрытие',
      customCancel: 'Отмена',
      customRestore: 'Восстановить настройки по умолчанию',
      maxFixedCol: 'Максимальное количество замороженных столбцов не может превышать {0}.'
    },
    grid: {
      selectOneRecord: 'Пожалуйста, выберите хотя бы одну запись!',
      deleteSelectRecord: 'Вы уверены, что хотите удалить выбранные записи?',
      removeSelectRecord: 'Вы уверены, что хотите удалить выбранные записи?',
      dataUnchanged: 'Данные не изменены!',
      delSuccess: 'Выбранные записи успешно удалены!',
      saveSuccess: 'Сохранено успешно!',
      operError: 'Произошла ошибка, и операция не удалась!'
    },
    select: {
      search: 'поиск',
      loadingText: 'загрузка',
      emptyText: 'Данных пока нет'
    },
    pager: {
      goto: 'Перейти к',
      gotoTitle: 'Количество страниц',
      pagesize: '{0} элементов/страница',
      total: 'Всего {0} записей',
      pageClassifier: 'Страница',
      homePage: 'первая страница',
      homePageTitle: 'первая страница',
      prevPage: 'Предыдущая страница',
      prevPageTitle: 'Предыдущая страница',
      nextPage: 'Следующая страница',
      nextPageTitle: 'Следующая страница',
      prevJump: 'Перейти на страницу вверх',
      prevJumpTitle: 'Перейти на страницу вверх',
      nextJump: 'Перейти на страницу вниз',
      nextJumpTitle: 'Перейти на страницу вниз',
      endPage: 'Последняя страница',
      endPageTitle: 'Последняя страница'
    },
    alert: {
      title: 'Системная подсказка'
    },
    button: {
      confirm: 'подтверждать',
      cancel: 'Отмена'
    },
    filter: {
      search: 'поиск'
    },
    custom: {
      cstmTitle: 'Настройки столбца',
      cstmRestore: 'Восстановить настройки по умолчанию',
      cstmCancel: 'Отмена',
      cstmConfirm: 'Конечно',
      cstmConfirmRestore: 'Пожалуйста, подтвердите, нужно ли восстановить конфигурацию столбца по умолчанию?',
      cstmDragTarget: 'Движущаяся цель: {0}',
      setting: {
        colSort: 'сортировать',
        sortHelpTip: 'Нажмите и перетащите значок, чтобы изменить порядок столбцов.',
        colTitle: 'заголовок',
        colResizable: 'Ширина столбца (пикселей)',
        colVisible: 'Отображать ли',
        colFixed: 'заморозить столбец',
        colFixedMax: 'Закрепить столбцы (до {0} столбцов)',
        fixedLeft: 'левая сторона',
        fixedUnset: 'Не установлено',
        fixedRight: 'правая сторона'
      }
    },
    import: {
      modes: {
        covering: 'Метод перезаписи (непосредственная перезапись данных таблицы)',
        insert: 'Append at the down (добавление новых данных внизу таблицы)',
        insertTop: 'Top add (добавление новых данных вверху таблицы)',
        insertBottom: 'Append at the down (добавление новых данных внизу таблицы)'
      },
      impTitle: 'Импортировать данные',
      impFile: 'имя файла',
      impSelect: 'Выберите файл',
      impType: 'Тип файла',
      impOpts: 'Настройки параметров',
      impMode: 'режим импорта',
      impConfirm: 'импортировать',
      impCancel: 'Отмена'
    },
    export: {
      types: {
        csv: 'CSV (через запятую)(*.csv)',
        html: 'Веб-страница (*.html)',
        xml: 'XML-данные (*.xml)',
        txt: 'Текстовый файл (с разделителями табуляцией) (*.txt)',
        xls: 'Книга Excel 97-2003 (*.xls)',
        xlsx: 'Книга Excel (*.xlsx)',
        pdf: 'PDF (*.pdf)'
      },
      modes: {
        current: 'Текущие данные (данные текущей страницы)',
        selected: 'Выбранные данные (выбранные данные на текущей странице)',
        all: 'Полные данные (включая все данные с разбивкой на страницы)'
      },
      printTitle: 'Распечатать данные',
      expTitle: 'Экспортировать данные',
      expName: 'имя файла',
      expNamePlaceholder: 'Пожалуйста, введите имя файла',
      expSheetName: 'заголовок',
      expSheetNamePlaceholder: 'Пожалуйста, введите название',
      expType: 'тип сохранения',
      expMode: 'Выберите данные',
      expCurrentColumn: 'Все поля',
      expColumn: 'Выберите поле',
      expOpts: 'Настройки параметров',
      expOptHeader: 'Заголовок',
      expHeaderTitle: 'Требуется ли заголовок?',
      expOptFooter: 'конец таблицы',
      expFooterTitle: 'Нужен ли нижний колонтитул таблицы?',
      expOptColgroup: 'Заголовок группы',
      expColgroupTitle: 'Если они присутствуют, поддерживаются заголовки со структурами группировки.',
      expOptMerge: 'слить',
      expMergeTitle: 'Поддерживает ячейки со структурами слияния, если они присутствуют.',
      expOptAllExpand: 'Развернуть уровень',
      expAllExpandTitle: 'Если он существует, он поддерживает расширение всех данных с иерархической структурой.',
      expOptUseStyle: 'стиль',
      expUseStyleTitle: 'Стилизованные ячейки поддерживаются, если они есть.',
      expOptOriginal: 'исходные данные',
      expOriginalTitle: 'Если это исходные данные, они поддерживают импорт в таблицу.',
      expPrint: 'Распечатать',
      expConfirm: 'Экспорт',
      expCancel: 'Отмена'
    },
    modal: {
      errTitle: 'Сообщение об ошибке',
      zoomMin: 'минимизировать',
      zoomIn: 'максимизировать',
      zoomOut: 'снижение',
      close: 'закрытие',
      miniMaxSize: 'Количество свернутых окон не может превышать {0}.'
    },
    drawer: {
      close: 'закрытие'
    },
    form: {
      folding: 'закрывать',
      unfolding: 'Расширять'
    },
    toolbar: {
      import: 'импортировать',
      export: 'Экспорт',
      print: 'Распечатать',
      refresh: 'обновить',
      zoomIn: 'полноэкранный',
      zoomOut: 'снижение',
      custom: 'Настройки столбца',
      customAll: 'все',
      customConfirm: 'подтверждать',
      customRestore: 'перезагрузить',
      fixedLeft: 'заморожен слева',
      fixedRight: 'застыл справа',
      cancelFixed: 'Разморозить столбец'
    },
    input: {
      date: {
        m1: 'январь',
        m2: 'февраль',
        m3: 'Маршировать',
        m4: 'апрель',
        m5: 'Может',
        m6: '06 июня',
        m7: 'Июль',
        m8: 'Август',
        m9: 'Сентябрь',
        m10: 'Октябрь',
        m11: 'ноябрь',
        m12: 'декабрь',
        quarterLabel: '{0} лет',
        monthLabel: '{0} лет',
        dayLabel: '{0} год {1}',
        labelFormat: {
          date: 'yyyy-MM-dd',
          time: 'HH:mm:ss',
          datetime: 'yyyy-MM-dd HH:mm:ss',
          week: 'Неделя WW года yyyy',
          month: 'yyyy-MM',
          quarter: 'квартал q года yyyy',
          year: 'yyyy'
        },
        weeks: {
          w: 'неделя',
          w0: 'Воскресенье',
          w1: 'в понедельник',
          w2: 'Вторник',
          w3: 'Среда',
          w4: 'Четверг',
          w5: 'Пятница',
          w6: 'Суббота'
        },
        months: {
          m0: 'январь',
          m1: 'февраль',
          m2: 'Маршировать',
          m3: 'апрель',
          m4: 'Может',
          m5: 'Июнь',
          m6: 'Июль',
          m7: 'Август',
          m8: 'Сентябрь',
          m9: 'Октябрь',
          m10: 'ноябрь',
          m11: 'декабрь'
        },
        quarters: {
          q1: 'первый квартал',
          q2: 'второй квартал',
          q3: 'третий квартал',
          q4: 'четвертый квартал'
        }
      }
    },
    imagePreview: {
      popupTitle: 'Предварительный просмотр',
      operBtn: {
        zoomOut: 'уменьшить масштаб',
        zoomIn: 'увеличить',
        pctFull: 'пропорциональное масштабирование',
        pct11: 'Показать исходный размер',
        rotateLeft: 'Повернуть влево',
        rotateRight: 'Повернуть вправо',
        print: 'Нажмите, чтобы распечатать изображение',
        download: 'Нажмите, чтобы загрузить изображение'
      }
    },
    upload: {
      fileBtnText: 'Нажмите или перетащите, чтобы загрузить',
      imgBtnText: 'Нажмите или перетащите, чтобы загрузить',
      dragPlaceholder: 'Пожалуйста, перетащите файл в эту область, чтобы загрузить его.',
      imgSizeHint: 'Листовка{0}',
      imgCountHint: 'Максимум {0} изображений',
      fileTypeHint: 'Поддерживаемые типы файлов: {0}',
      fileSizeHint: 'Размер одного файла не превышает {0}',
      fileCountHint: 'Можно загрузить до {0} файлов.',
      overCountErr: 'Можно выбрать только {0} файлов!',
      overCountExtraErr: 'Превышено максимальное количество файлов ({0}). Лишние файлы ({1}) будут проигнорированы!',
      overSizeErr: 'Максимальный размер файла не может превышать {0}!',
      reUpload: 'Перезагрузить',
      uploadProgress: 'Загрузка {0}%',
      uploadErr: 'Загрузка не удалась',
      uploadSuccess: 'Загрузка успешна',
      moreBtnText: 'Подробнее ({0})',
      viewItemTitle: 'Нажмите, чтобы просмотреть',
      morePopup: {
        readTitle: 'просмотреть список',
        imageTitle: 'Загрузить фотографии',
        fileTitle: 'Загрузить файлы'
      }
    },
    formDesign: {
      formName: 'имя формы',
      defFormTitle: 'безымянная форма',
      widgetPropTab: 'Свойства управления',
      widgetFormTab: 'свойства формы',
      error: {
        wdFormUni: 'В форму можно добавить только один элемент управления этого типа.',
        wdSubUni: 'В подтаблицу разрешено добавлять только один элемент управления этого типа.'
      },
      styleSetting: {
        btn: 'Настройки стиля',
        title: 'Настройки стиля формы',
        layoutTitle: 'Схема управления',
        verticalLayout: 'Верхнее и нижнее расположение',
        horizontalLayout: 'Горизонтальная планировка',
        styleTitle: 'Стиль заголовка',
        boldTitle: 'Название жирное',
        fontBold: 'Смелый',
        fontNormal: 'общепринятый',
        colonTitle: 'Показать двоеточие',
        colonVisible: 'показывать',
        colonHidden: 'скрывать',
        alignTitle: 'Выравнивание',
        widthTitle: 'ширина заголовка',
        alignLeft: 'Слева',
        alignRight: 'Справа',
        unitPx: 'Пиксель',
        unitPct: 'процент'
      },
      widget: {
        group: {
          base: 'Основные элементы управления',
          layout: 'Элементы управления макетом',
          system: 'Системные элементы управления',
          module: 'модуль управления',
          chart: 'контроль диаграммы',
          advanced: 'Расширенные элементы управления'
        },
        copyTitle: 'Копировать_{0}',
        component: {
          input: 'Поле ввода',
          textarea: 'текстовое поле',
          select: 'раскрывающийся выбор',
          row: 'Одна строка и несколько столбцов',
          title: 'заголовок',
          text: 'текст',
          subtable: 'Подтаблица',
          VxeSwitch: 'ли',
          VxeInput: 'Поле ввода',
          VxeNumberInput: 'число',
          VxeDatePicker: 'дата',
          VxeTextarea: 'текстовое поле',
          VxeSelect: 'раскрывающийся выбор',
          VxeTreeSelect: 'выбор дерева',
          VxeRadioGroup: 'переключатель',
          VxeCheckboxGroup: 'флажок',
          VxeUploadFile: 'документ',
          VxeUploadImage: 'картина'
        }
      },
      widgetProp: {
        name: 'Имя элемента управления',
        placeholder: 'быстрый',
        required: 'Требуется проверка',
        multiple: 'Разрешить множественный выбор',
        displaySetting: {
          name: 'настройки дисплея',
          pc: 'ПК',
          mobile: 'Мобильная версия',
          visible: 'показывать',
          hidden: 'скрывать'
        },
        dataSource: {
          name: 'источник данных',
          defValue: 'Вариант {0}',
          addOption: 'Добавить параметры',
          batchEditOption: 'Пакетное редактирование',
          batchEditTip: 'Каждая строка соответствует опции и поддерживает копирование и вставку непосредственно из таблиц, Excel и WPS.',
          batchEditSubTip: 'Каждая строка соответствует опции. Если это группа, подэлементы могут начинаться с пробела или клавиши табуляции. Поддерживается прямое копирование и вставка из таблиц, Excel и WPS.',
          buildOption: 'Варианты сборки'
        },
        rowProp: {
          colSize: 'Количество столбцов',
          col2: 'две колонки',
          col3: 'три столбца',
          col4: 'четыре столбца',
          col6: 'шесть столбцов',
          layout: 'макет'
        },
        textProp: {
          name: 'содержание',
          alignTitle: 'Выравнивание',
          alignLeft: 'Слева',
          alignCenter: 'центр',
          alignRight: 'Справа',
          colorTitle: 'Цвет шрифта',
          sizeTitle: 'размер шрифта',
          boldTitle: 'Жирный шрифт',
          fontNormal: 'общепринятый',
          fontBold: 'Смелый'
        },
        subtableProp: {
          seqTitle: 'серийный номер',
          showSeq: 'Отображение серийного номера',
          showCheckbox: 'Разрешить множественный выбор',
          errSubDrag: 'Подтаблица не поддерживает этот элемент управления, используйте другие элементы управления.',
          colPlace: 'Перетащите элемент управления в'
        },
        uploadProp: {
          limitFileCount: 'Ограничение количества файлов',
          limitFileSize: 'Ограничение размера файла',
          multiFile: 'Разрешить загрузку нескольких файлов',
          limitImgCount: 'Ограничение количества изображений',
          limitImgSize: 'Ограничение размера изображения',
          multiImg: 'Разрешить загрузку нескольких изображений'
        }
      }
    },
    listDesign: {
      fieldSettingTab: 'Настройки поля',
      listSettingTab: 'Настройки параметров',
      searchTitle: 'Условия запроса',
      listTitle: 'поле списка',
      searchField: 'Поле запроса',
      listField: 'поле списка',
      activeBtn: {
        ActionButtonUpdate: 'редактировать',
        ActionButtonDelete: 'удалить'
      },
      search: {
        addBtn: 'редактировать',
        emptyText: 'Условия запроса не настроены',
        editPopupTitle: 'Редактировать поля запроса'
      },
      searchPopup: {
        colTitle: 'заголовок',
        saveBtn: 'сохранять'
      }
    },
    text: {
      copySuccess: 'Скопировано в буфер обмена',
      copyError: 'Текущая среда не поддерживает эту операцию'
    },
    countdown: {
      formats: {
        yyyy: 'Год',
        MM: 'луна',
        dd: 'небо',
        HH: 'час',
        mm: 'точка',
        ss: 'Второй'
      }
    },
    plugins: {
      extendCellArea: {
        area: {
          mergeErr: 'Эту операцию нельзя выполнить с объединенными ячейками.',
          multiErr: 'Эту операцию нельзя выполнить с несколькими областями выделения.',
          extendErr: 'Если расширенный диапазон содержит объединенные ячейки, все объединенные ячейки должны быть одинакового размера.',
          pasteMultiErr: 'Невозможно вставить. Для выполнения этой операции скопированные и вставленные области должны быть одинакового размера.',
          cpInvalidErr: 'Невозможно выполнить операцию. В выбранном вами диапазоне есть запрещенные столбцы ({0}).'
        },
        fnr: {
          title: 'Найти и заменить',
          findLabel: 'Находить',
          replaceLabel: 'заменять',
          findTitle: 'Найдите что:',
          replaceTitle: 'Заменить на:',
          tabs: {
            find: 'Находить',
            replace: 'заменять'
          },
          filter: {
            re: 'регулярное выражение',
            whole: 'совпадение всего слова',
            sensitive: 'с учетом регистра'
          },
          btns: {
            findNext: 'Найти следующий',
            findAll: 'Найти все',
            replace: 'заменять',
            replaceAll: 'Заменить все',
            cancel: 'Отмена'
          },
          header: {
            seq: '#',
            cell: 'клетка',
            value: 'ценить'
          },
          empty: '(нулевое значение)',
          reError: 'Недопустимое регулярное выражение',
          recordCount: 'Найдено {0} ячеек',
          notCell: 'Соответствующая ячейка не найдена',
          replaceSuccess: 'Успешно заменено {0} ячеек.'
        }
      },
      filterComplexInput: {
        menus: {
          fixedColumn: 'заморозить столбец',
          fixedGroup: 'заморозить группу',
          cancelFixed: 'Разморозить',
          fixedLeft: 'заморозить слева',
          fixedRight: 'замри прямо'
        },
        cases: {
          equal: 'равный',
          gt: 'больше, чем',
          lt: 'меньше, чем',
          begin: 'Начало',
          endin: 'Конец',
          include: 'Включать',
          isSensitive: 'с учетом регистра'
        }
      },
      filterCombination: {
        menus: {
          clearSort: 'Очистить сортировку',
          sortAsc: 'По возрастанию',
          sortDesc: 'порядок убывания',
          fixedColumn: 'заморозить столбец',
          fixedGroup: 'заморозить группу',
          cancelFixed: 'Разморозить',
          fixedLeft: 'заморозить слева',
          fixedRight: 'замри прямо',
          clearFilter: 'Очистить фильтры',
          textOption: 'текстовый фильтр',
          numberOption: 'числовой фильтр'
        },
        popup: {
          title: 'Как настроить фильтрацию',
          currColumnTitle: 'Текущая колонка:',
          and: 'и',
          or: 'или',
          describeHtml: 'Доступно? представляет собой один символ.<br/>Используйте * для обозначения любого количества символов.'
        },
        cases: {
          equal: 'равный',
          unequal: 'не равен',
          gt: 'больше, чем',
          ge: 'больше или равно',
          lt: 'меньше, чем',
          le: 'меньше или равно',
          begin: 'Начало',
          notbegin: 'Не в начале',
          endin: 'Конец',
          notendin: 'Концовка не та',
          include: 'Включать',
          exclude: 'Не включено',
          between: 'между',
          custom: 'Пользовательский фильтр',
          insensitive: 'Не чувствителен к регистру',
          isSensitive: 'с учетом регистра'
        },
        empty: '(пустой)',
        notData: 'Нет совпадений'
      }
    },
    pro: {
      area: {
        mergeErr: 'Эту операцию нельзя выполнить с объединенными ячейками.',
        multiErr: 'Эту операцию нельзя выполнить с несколькими областями выделения.',
        extendErr: 'Если расширенный диапазон содержит объединенные ячейки, все объединенные ячейки должны быть одинакового размера.',
        pasteMultiErr: 'Невозможно вставить. Для выполнения этой операции скопированные и вставленные области должны быть одинакового размера.'
      },
      fnr: {
        title: 'Найти и заменить',
        findLabel: 'Находить',
        replaceLabel: 'заменять',
        findTitle: 'Найдите что:',
        replaceTitle: 'Заменить на:',
        tabs: {
          find: 'Находить',
          replace: 'заменять'
        },
        filter: {
          re: 'регулярное выражение',
          whole: 'совпадение всего слова',
          sensitive: 'с учетом регистра'
        },
        btns: {
          findNext: 'Найти следующий',
          findAll: 'Найти все',
          replace: 'заменять',
          replaceAll: 'Заменить все',
          cancel: 'Отмена'
        },
        header: {
          seq: '#',
          cell: 'клетка',
          value: 'ценить'
        },
        empty: '(нулевое значение)',
        reError: 'Недопустимое регулярное выражение',
        recordCount: 'Найдено {0} ячеек',
        notCell: 'Соответствующая ячейка не найдена',
        replaceSuccess: 'Успешно заменено {0} ячеек.'
      }
    },
    renderer: {
      search: 'поиск',
      cases: {
        equal: 'равный',
        unequal: 'не равен',
        gt: 'больше, чем',
        ge: 'больше или равно',
        lt: 'меньше, чем',
        le: 'меньше или равно',
        begin: 'Начало',
        notbegin: 'Не в начале',
        endin: 'Конец',
        notendin: 'Концовка не та',
        include: 'Включать',
        exclude: 'Не включено',
        between: 'между',
        custom: 'Пользовательский фильтр',
        insensitive: 'Не чувствителен к регистру',
        isSensitive: 'с учетом регистра'
      },
      combination: {
        menus: {
          clearSort: 'Очистить сортировку',
          sortAsc: 'По возрастанию',
          sortDesc: 'порядок убывания',
          fixedColumn: 'Заблокировать столбец',
          fixedGroup: 'Блокировать группу',
          cancelFixed: 'Разблокировать',
          fixedLeft: 'Блокировка слева',
          fixedRight: 'Блокировка вправо',
          clearFilter: 'Очистить фильтры',
          textOption: 'текстовый фильтр',
          numberOption: 'числовой фильтр'
        },
        popup: {
          title: 'Как настроить фильтрацию',
          currColumnTitle: 'Текущая колонка:',
          and: 'и',
          or: 'или',
          describeHtml: 'Доступно? представляет собой один символ.<br/>Используйте * для обозначения любого количества символов.'
        },
        empty: '(пустой)',
        notData: 'Нет совпадений'
      }
    }
  }
}