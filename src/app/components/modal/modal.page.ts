import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ESizeModal } from 'src/app/utils/modalSize.enum';

@Component({
  selector: 'app-modal-ia',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  @Input() template: TemplateRef<ElementRef>;
  @Input() size: string = ESizeModal.MEDIUM;
  @Input() showModal: boolean = false;
  @Input() isCloseable: boolean = true;
  @Output() clickClose = new EventEmitter<boolean>();
  sizeModal = ESizeModal;

  closeModal() {
    this.clickClose.emit(false);
  }

  closeModalOverlay(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const isOverlay = targetElement.classList.contains('modal-overlay');
    if (isOverlay && this.isCloseable) {
      this.closeModal();
    }
  }
}
