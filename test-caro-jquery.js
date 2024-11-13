$(document).ready(function() {
    let currentPlayer = 'x';  // Player 'x' bắt đầu
    let gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // Hàm tạo bàn cờ
    function createBoard() {
        $('#board').empty(); // Xóa bàn cờ cũ
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                $('#board').append('<div class="cell" data-row="' + row + '" data-col="' + col + '"></div>');
            }
        }
    }

    // Hàm kiểm tra người chiến thắng
    function checkWinner() {
        // Kiểm tra hàng ngang, dọc và chéo
        for (let i = 0; i < 3; i++) {
            if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2] && gameBoard[i][0] !== '') {
                return gameBoard[i][0];
            }
            if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i] && gameBoard[0][i] !== '') {
                return gameBoard[0][i];
            }
        }

        if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0] !== '') {
            return gameBoard[0][0];
        }
        if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2] !== '') {
            return gameBoard[0][2];
        }

        return null;
    }

    // Hàm xử lý khi người chơi click vào ô cờ
    $(document).on('click', '.cell', function() {
        let row = $(this).data('row');
        let col = $(this).data('col');

        // Nếu ô đã được chọn hoặc game đã có người chiến thắng thì không làm gì
        if (gameBoard[row][col] !== '' || checkWinner()) {
            return;
        }

        // Cập nhật bàn cờ và giao diện
        gameBoard[row][col] = currentPlayer;
        $(this).text(currentPlayer).addClass(currentPlayer);

        // Kiểm tra người chiến thắng
        let winner = checkWinner();
        if (winner) {
            setTimeout(() => alert(winner.toUpperCase() + ' thắng!'), 100);
        }

        // Chuyển lượt người chơi
        currentPlayer = (currentPlayer === 'x') ? 'o' : 'x';
    });

    // Khởi tạo bàn cờ
    createBoard();
});