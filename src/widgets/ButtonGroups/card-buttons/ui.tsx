import {DeleteButtonIcon, EditButtonIcon} from '@shared/ui/Buttons';

export const CardButtons = (props: any) => {
  const {onEdit, onDelete, item, bgWhite = true} = props;

  return (
    <div
      className={`absolute top-2 right-2 flex items-center ${
        !bgWhite && 'gap-2'
      }`}
    >
      {'finish' in item && item.finish === true ? (
        <EditButtonIcon item={item} bgWhite={bgWhite} onEdit={onEdit} />
      ) : item['finish'] === undefined ? (
        <EditButtonIcon item={item} bgWhite={bgWhite} onEdit={onEdit} />
      ) : null}

      <DeleteButtonIcon item={item} bgWhite={bgWhite} onEdit={onEdit} />
    </div>
  );
};
